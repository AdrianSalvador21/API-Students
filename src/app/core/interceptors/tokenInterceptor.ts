import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StudentsService} from '../services/students.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token = '';

  constructor(public studentService: StudentsService, private store: Store<AppState>) {
    this.store.select('security').subscribe(state => {
      this.token = state.token;
    });
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(request);
  }
}
