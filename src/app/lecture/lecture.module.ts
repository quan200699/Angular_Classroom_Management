import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LectureRoutingModule} from "./lecture-routing.module";
import {ListLectureComponent} from "./list-lecture/list-lecture.component";
import {CreateLectureComponent} from "./create-lecture/create-lecture.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListLectureComponent,
    CreateLectureComponent,
  ],
  imports: [
    CommonModule,
    LectureRoutingModule,
    ReactiveFormsModule
  ]
})
export class LectureModule { }
