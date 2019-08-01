import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  login(data): any {
    return this.http.post<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/oauth/`,
      {
        username: data.user,
        password: data.password
      }
    ).pipe(
      map((response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        return response;
      }));
  }

  getStudents(): any {
    return this.http.get<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/students/`)
      .pipe(
        map((response) => {
          return response;
        }));
  }

  getStudentDetail(id): any {
    console.log(id);
    return this.http.get<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/students/${id}`)
      .pipe(
        map((response) => {
          return response;
        }));
  }


  getCourses(): any {
    return this.http.get<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/courses/`)
      .pipe(
        map((response) => {
          return response;
        }));
  }


  createStudent(): any {
    return this.http.post<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/students/`,
      {
        first_name: 'Manuel',
        last_name: 'Jimenez',
        last_name_second: 'Arleo',
        email: 'manuel@manue.com',
        phone: '3502949294',
        birth_date: '1992-04-20'
      }
    ).pipe(
      map((response) => {
        console.log(response);
        return response;
      }));
  }
}
