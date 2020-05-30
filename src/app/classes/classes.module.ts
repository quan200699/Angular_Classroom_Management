import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassesRoutingModule} from "./classes-routing.module";
import {ListClassComponent} from "./list-class/list-class.component";
import {CreateClassComponent} from "./create-class/create-class.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListClassComponent,
    CreateClassComponent,
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClassesModule { }
