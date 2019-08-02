import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any = [];
  courseDetail: any;

  constructor(public coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(coursesResponse => {
      this.courses = coursesResponse;
      this.courses.forEach(course => {
        course.collapseName = course.name.replace(/ /g, 'a');
        course.collapseName = course.name.replace(/./g, 'b');
      });
      console.log(coursesResponse);
    });
  }

  getCourseDetail(course) {
    if (!course.fullInfo) {
      this.coursesService.getCourseDetail(course.id).subscribe(detailResponse => {
        console.log(detailResponse);
        course.fullInfo = detailResponse;
      });
    } else {
      return;
    }
  }

}
