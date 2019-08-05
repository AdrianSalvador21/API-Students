import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentsService} from '../../../../core/services/students.service';
import {SetTokenAction} from '../../../../core/reducers/securityReducer/security.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  filterForm = this.fb.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(public fb: FormBuilder, public studentsService: StudentsService, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
  }

  login() {
    this.studentsService.login(this.filterForm.getRawValue()).subscribe(tokenResponse => {
      const action = new SetTokenAction( tokenResponse.token );
      this.store.dispatch( action );
      this.router.navigate(['/dashboard/students']);
    });
  }

}
