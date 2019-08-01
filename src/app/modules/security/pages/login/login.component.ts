import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentsService} from '../../../../core/services/students.service';

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

  constructor(public fb: FormBuilder, public studentsService: StudentsService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    // this.studentsService.login(this.filterForm.getRawValue()).subscribe(tokenResponse => {
    //   console.log(tokenResponse);
    //   localStorage.setItem('token', tokenResponse.token);
    //   this.router.navigate(['/students']);
    // });
  }

}
