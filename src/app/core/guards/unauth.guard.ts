import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Injectable({providedIn: 'root'})
export class UnauthGuard implements CanActivate {

  protected token;

  constructor(protected router: Router,
              protected store: Store<AppState>) {
    this.store.select('security').subscribe(securityState => {
      this.token = securityState.token;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token == '') {
      return true;
    } else {
      return false;
    }
    return true;
  }
}
