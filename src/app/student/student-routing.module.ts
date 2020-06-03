import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EditStudentComponent} from "./edit-student/edit-student.component";


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'edit/:id',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
