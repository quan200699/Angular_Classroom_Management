import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListProgramComponent} from "./list-program/list-program.component";
import {CreateProgramComponent} from "./create-program/create-program.component";
import {EditProgramComponent} from "./edit-program/edit-program.component";



const routes: Routes = [
  {
    path: '',
    component: ListProgramComponent
  },
  {
    path: 'create',
    component: CreateProgramComponent
  },
  {
    path: 'edit/:id',
    component: EditProgramComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
