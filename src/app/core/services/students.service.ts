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


  createStudent(data): any {
    return this.http.post<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/students/`, data
    ).pipe(
      map((response) => {
        console.log(response);
        return response;
      }));
  }

  deleteStudent(id): any {
    return this.http.delete<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/students/${id}`
    ).pipe(
      map((response) => {
        console.log(response);
        return response;
      }));
  }

  updateStudent(data, id): any {
    return this.http.put<any>(`https://hack-the-job.smartlending.mx/schoolsystem/api/v1/students/${id}`, data
    ).pipe(
      map((response) => {
        console.log(response);
        return response;
      }));
  }
}
