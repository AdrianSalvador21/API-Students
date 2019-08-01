import { ActionReducerMap } from '@ngrx/store';

import * as fromSecurity from './core/reducers/securityReducer/security.reducer';

import * as fromSecurityActions from './core/reducers/securityReducer/security.actions';

export interface AppState {
  security: any;
}


export const appReducers: ActionReducerMap<AppState> = {
  security: fromSecurity.securityReducer,
};
