import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {SetTokenAction} from '../../../../core/reducers/securityReducer/security.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  validUser = false;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.select('security').subscribe(state => {
      this.validUser = state.token !== '';
    });
  }

  logout() {
    const action = new SetTokenAction( '');
    this.store.dispatch( action );
    this.router.navigate(['/security/login']);
  }

}
