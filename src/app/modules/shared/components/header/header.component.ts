import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  validUser = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('security').subscribe(state => {
      console.log(state);
      this.validUser = state.token !== '';
    });
  }

}
