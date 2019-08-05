import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../../core/services/courses.service';
import {StudentsService} from '../../../../core/services/students.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any = [];
  enrolledStudents = [];
  students: any;

  constructor(public coursesService: CoursesService, public studentsService: StudentsService) { }

  ngOnInit() {
    this.getCourses();
    this.getStudents();
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(coursesResponse => {
      this.courses = coursesResponse;
      this.courses.forEach(course => {
        course.collapseName = course.name.replace(/ /g, 'a');
        course.collapseName = course.name.replace(/./g, 'b');
        course.enrolledStudentsIds = [];
        course.enrolledStudents = [];
      });
      console.log(coursesResponse);
    });
  }

  getCourseDetail(course) {
    this.getEnrolledStudents(course);
    if (!course.fullInfo) {
      this.coursesService.getCourseDetail(course.id).subscribe(detailResponse => {
        console.log(detailResponse);
        course.fullInfo = detailResponse;
      });
    } else {
      return;
    }
  }

  getStudents() {
    this.studentsService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  getEnrolledStudents(course) {
    this.coursesService.getEnrolledCourses(course.id).subscribe(studentsResponse => {
      course.enrolledStudentsIds = [];
      course.enrolledStudents = studentsResponse.students;
      course.enrolledStudents.forEach(enrolledStudent => {
        course.enrolledStudentsIds.push(enrolledStudent.id);
      });
      console.log(course.enrolledStudentsIds);
      console.log(course.enrolledStudents);
    });
  }

  enrollStudent(studentId, course) {
    this.coursesService.enrollStudent(studentId, course.id).subscribe(enrollResponse => {
      console.log(enrollResponse);
      this.getEnrolledStudents(course);
    });
  }

}
