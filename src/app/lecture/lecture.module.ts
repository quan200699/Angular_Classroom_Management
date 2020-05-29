import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LectureRoutingModule} from "./lecture-routing.module";
import {ListLectureComponent} from "./list-lecture/list-lecture.component";



@NgModule({
  declarations: [
    ListLectureComponent,
  ],
  imports: [
    CommonModule,
    LectureRoutingModule
  ]
})
export class LectureModule { }
