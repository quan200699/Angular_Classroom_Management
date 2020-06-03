import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentRoutingModule} from "./student-routing.module";
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EditStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
