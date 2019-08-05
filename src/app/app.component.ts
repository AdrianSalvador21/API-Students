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
  }
}
