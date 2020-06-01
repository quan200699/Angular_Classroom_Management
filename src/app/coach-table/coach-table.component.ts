import {Component, OnInit} from '@angular/core';
import {LectureService} from "../service/lecture/lecture.service";
import {Lecture} from "../interface/lecture";

@Component({
  selector: 'app-coach-table',
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css']
})
export class CoachTableComponent implements OnInit {
  listLecture: Lecture[] = [];

  constructor(private lectureService: LectureService) {
  }

  ngOnInit() {
    this.getAllLecture();
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

  getAllClassesByInstructor(lecture: Lecture) {
    return this.lectureService.findAllClassesByInstructor(lecture.id).toPromise();
  }

  getAllClassesByCoach(lecture: Lecture) {
    return this.lectureService.findAllClassesByCoach(lecture.id).toPromise();
  }
}
