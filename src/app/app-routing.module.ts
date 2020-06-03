import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoachTableComponent} from "./coach-table/coach-table.component";


const routes: Routes = [
  {
    path: 'programs',
    loadChildren: () => import('./program/program.module').then(module => module.ProgramModule)
  },
  {
    path: 'classrooms',
    loadChildren: () => import('./classroom/classroom.module').then(module => module.ClassroomModule)
  },
  {
    path: 'lectures',
    loadChildren: () => import('./lecture/lecture.module').then(module => module.LectureModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then(module => module.ClassesModule)
  },
  {
    path: 'coach-instructor',
    component: CoachTableComponent
  },
  {
    path: 'students',
    loadChildren: () => import('./student/student.module').then(module => module.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
