import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassroomRoutingModule} from "./classroom-routing.module";
import {CreateClassroomComponent} from "./create-classroom/create-classroom.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ListClassroomComponent} from "./list-classroom/list-classroom.component";
import {EditClassroomComponent} from "./edit-classroom/edit-classroom.component";



@NgModule({
  declarations: [
    ListClassroomComponent,
    CreateClassroomComponent,
    EditClassroomComponent,
  ],
  imports: [
    CommonModule,
    ClassroomRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClassroomModule { }
