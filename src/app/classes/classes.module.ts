import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassesRoutingModule} from "./classes-routing.module";
import {ListClassComponent} from "./list-class/list-class.component";
import {CreateClassComponent} from "./create-class/create-class.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditClassComponent} from "./edit-class/edit-class.component";



@NgModule({
  declarations: [
    ListClassComponent,
    CreateClassComponent,
    EditClassComponent,
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClassesModule { }
