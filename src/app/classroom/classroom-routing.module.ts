import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateClassroomComponent} from "./create-classroom/create-classroom.component";
import {ListClassroomComponent} from "./list-classroom/list-classroom.component";
import {EditClassroomComponent} from "./edit-classroom/edit-classroom.component";


const routes: Routes = [
  {
    path: '',
    component: ListClassroomComponent
  },
  {
    path: 'create',
    component: CreateClassroomComponent
  },
  {
    path: 'edit/:id',
    component: EditClassroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule {
}
