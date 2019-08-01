import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../../../core/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(studentsResponse => {
      console.log(studentsResponse);
    });
  }

}
