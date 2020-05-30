import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListClassComponent} from "./list-class/list-class.component";
import {CreateClassComponent} from "./create-class/create-class.component";
import {EditClassComponent} from "./edit-class/edit-class.component";
import {InfoClassComponent} from "./info-class/info-class.component";



const routes: Routes = [
  {
    path:'',
    component: ListClassComponent
  },
  {
    path:'create',
    component: CreateClassComponent
  },
  {
    path:'edit/:id',
    component: EditClassComponent
  },
  {
    path:'info/:id',
    component: InfoClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
