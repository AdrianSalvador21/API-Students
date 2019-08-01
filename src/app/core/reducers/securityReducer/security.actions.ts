import { Action } from '@ngrx/store';
export const SET_TOKEN = '[Security] Set Token';

export class SetTokenAction implements Action {
  readonly type = SET_TOKEN;
  constructor( public token: string ) {}
}

export type actions = SetTokenAction;
