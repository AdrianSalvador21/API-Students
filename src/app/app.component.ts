import {Component, OnInit} from '@angular/core';
import {StudentsService} from './core/services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API-alumnos';

  constructor(public studentsService: StudentsService) {
  }

  ngOnInit(): void {
    // this.studentsService.createStudent().subscribe(createStudentResponse => {
    //   console.log(createStudentResponse);
    // });


    // this.studentsService.login().subscribe(tokenResponse => {
    //   console.log(tokenResponse);
    //   this.studentsService.getStudents(tokenResponse).subscribe(studentsResponse => {
    //     console.log(studentsResponse);
    //   });
    //
    //   this.studentsService.getCourses().subscribe(coursesResponse => {
    //     console.log(coursesResponse);
    //   });
    // });
  }
}
