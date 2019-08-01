
import * as fromSecurity from './security.actions';

const initialStatus: any = {
  token: ''
};

export function securityReducer( state = initialStatus,
                                 action: fromSecurity.actions ): any {

  switch ( action.type ) {
    case fromSecurity.SET_TOKEN:
      return {
        ...initialStatus,
        token: action.token
      };
    default:
      return state;
  }

}
