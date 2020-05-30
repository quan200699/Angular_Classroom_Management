import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListLectureComponent} from "./list-lecture/list-lecture.component";
import {CreateLectureComponent} from "./create-lecture/create-lecture.component";
import {EditLectureComponent} from "./edit-lecture/edit-lecture.component";


const routes: Routes = [
  {
    path: '',
    component: ListLectureComponent
  },
  {
    path: 'create',
    component: CreateLectureComponent
  },
  {
    path: 'edit/:id',
    component: EditLectureComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectureRoutingModule {
}
