import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgramRoutingModule} from "./program-routing.module";
import {ListProgramComponent} from "./list-program/list-program.component";
import {CreateProgramComponent} from "./create-program/create-program.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditProgramComponent} from "./edit-program/edit-program.component";



@NgModule({
  declarations: [
    ListProgramComponent,
    CreateProgramComponent,
    EditProgramComponent,
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProgramModule { }
