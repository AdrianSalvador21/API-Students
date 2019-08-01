import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StudentsService} from '../services/students.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public studentService: StudentsService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.studentService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
