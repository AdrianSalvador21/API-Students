import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardRouting} from './dashboard.routing';
import {StudentsComponent} from './pages/students/students.component';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DashboardRouting
  ],
  declarations: [StudentsComponent, CoursesComponent]
})

export class DashboardModule {
}
