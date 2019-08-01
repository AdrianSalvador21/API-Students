import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './pages/students/students.component';
import {CoursesComponent} from './pages/courses/courses.component';

const dashboardRoutes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'students'}
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRouting {
}
