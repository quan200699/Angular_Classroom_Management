import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgramRoutingModule} from "./program-routing.module";
import {ListProgramComponent} from "./list-program/list-program.component";



@NgModule({
  declarations: [
    ListProgramComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule
  ]
})
export class ProgramModule { }
