import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassesRoutingModule} from "./classes-routing.module";
import {ListClassComponent} from "./list-class/list-class.component";



@NgModule({
  declarations: [
    ListClassComponent,
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ]
})
export class ClassesModule { }
