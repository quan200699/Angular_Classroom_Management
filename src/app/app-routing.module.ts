import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
