import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListLectureComponent} from "./list-lecture/list-lecture.component";


const routes: Routes = [
  {
    path: '',
    component: ListLectureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectureRoutingModule {
}
