import {Component, OnInit} from '@angular/core';
import {LectureService} from "../service/lecture/lecture.service";
import {Lecture} from "../interface/lecture";
import {Classroom} from "../interface/classroom";
import {ClassroomService} from "../service/classroom/classroom.service";
import {ClassesService} from "../service/classes/classes.service";
import {Classes} from "../interface/classes";

@Component({
  selector: 'app-coach-table',
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css']
})
export class CoachTableComponent implements OnInit {
  listLecture: Lecture[] = [];
  listClassroom: Classroom[] = [];
  listClassTime: string[] = [];

  constructor(private lectureService: LectureService,
              private classroomService: ClassroomService,
              private classesService: ClassesService) {
  }

  ngOnInit() {
    this.getAllLecture();
    this.getAllClassroom();
    this.listClassTime = ['G', 'H', 'I', 'K'];
  }

  getAllClassroom() {
    this.classroomService.getAllClassroom().subscribe(async listClassroom => {
      let numberOfStudent = 0;
      this.listClassroom = listClassroom;
      for (let i = 0; i < this.listClassroom.length; i++) {
        this.listClassroom[i].classes = await this.getAllClassByClassroom(this.listClassroom[i]);
      }
      for (let i = 0; i < this.listClassroom.length; i++) {
        for (let k = 0; k < this.listClassroom[i].classes.length; k++) {
          const numberOfStudentInClass = await this.getAllStudentByClasses(this.listClassroom[i].classes[k]);
          numberOfStudent += numberOfStudentInClass.length;
          this.listClassroom[i].tutorInG = await this.getAllTutorHasFreeTime(this.listClassroom[i].classes[k].id, 'G');
          this.listClassroom[i].tutorInH = await this.getAllTutorHasFreeTime(this.listClassroom[i].classes[k].id, 'H');
          this.listClassroom[i].tutorInI = await this.getAllTutorHasFreeTime(this.listClassroom[i].classes[k].id, 'I');
          this.listClassroom[i].tutorInK = await this.getAllTutorHasFreeTime(this.listClassroom[i].classes[k].id, 'K');
        }
        let efficiency = numberOfStudent / this.listClassroom[i].capacity;
        this.listClassroom[i].efficiency = Math.round(efficiency * 100)
        this.listClassroom[i].students = numberOfStudent;
        numberOfStudent = 0;
      }
    })
  }

  getAllTutorHasFreeTime(id: number, classTime: string) {
    return this.classesService.getAllTutorHasFreeTime(id, classTime).toPromise();
  }

  getAllLecture() {
    this.lectureService.getAllLecture().subscribe(async listLecture => {
      this.listLecture = listLecture;
      for (let i = 0; i < this.listLecture.length; i++) {
        this.listLecture[i].classInstructor = await this.getAllClassesByInstructor(this.listLecture[i]);
        this.listLecture[i].classCoach = await this.getAllClassesByCoach(this.listLecture[i]);
      }
    })
  }

  getAllStudentByClasses(classes: Classes) {
    return this.classesService.getAllStudentByClass(classes.id).toPromise();
  }

  getAllClassesByInstructor(lecture: Lecture) {
    return this.lectureService.findAllClassesByInstructor(lecture.id).toPromise();
  }

  getAllClassesByCoach(lecture: Lecture) {
    return this.lectureService.findAllClassesByCoach(lecture.id).toPromise();
  }

  getAllClassByClassroom(classroom: Classroom) {
    return this.classroomService.getAllClassesByClassroom(classroom.id).toPromise();
  }
}
