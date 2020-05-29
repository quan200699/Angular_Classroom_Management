import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListProgramComponent} from "./list-program/list-program.component";
import {CreateProgramComponent} from "./create-program/create-program.component";



const routes: Routes = [
  {
    path: '',
    component: ListProgramComponent
  },
  {
    path: 'create',
    component: CreateProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
