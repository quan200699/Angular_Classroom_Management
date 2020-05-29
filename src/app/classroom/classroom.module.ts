import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassroomRoutingModule} from "./classroom-routing.module";
import {CreateClassroomComponent} from "./create-classroom/create-classroom.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateClassroomComponent,
  ],
  imports: [
    CommonModule,
    ClassroomRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClassroomModule { }
