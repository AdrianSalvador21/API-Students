import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  getCourses(): any {
    return this.http.get<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/courses/`)
      .pipe(
        map((response) => {
          return response;
        }));
  }

  getCourseDetail(id): any {
    return this.http.get<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/courses/${id}`)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }));
  }

}
