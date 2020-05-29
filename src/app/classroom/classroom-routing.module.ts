import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateClassroomComponent} from "./create-classroom/create-classroom.component";



const routes: Routes = [
  {
    path:'create',
    component: CreateClassroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
